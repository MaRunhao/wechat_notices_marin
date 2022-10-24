import nodeSchedule from 'node-schedule';

/**
 * 
 * @param taskFn 
 * @param timed 
 *  *    *    *    *    *    *
    ┬    ┬    ┬    ┬    ┬    ┬
    │    │    │    │    │    │
    │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
    │    │    │    │    └───── month (1 - 12)
    │    │    │    └────────── day of month (1 - 31)
    │    │    └─────────────── hour (0 - 23)
    │    └──────────────────── minute (0 - 59)
    └───────────────────────── second (0 - 59, OPTIONAL)
 * @returns 
 */
export function scheduleTask(taskFn: Function, timed: string) {
  if (Object.prototype.toString.call(taskFn).toLowerCase() !== '[object function]') return;

  nodeSchedule.scheduleJob(timed, () => {
    taskFn();
  });
}