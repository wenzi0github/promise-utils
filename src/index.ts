/**
 * 延时器
 * @param delay 延迟的时间，单位毫秒
 * @returns {Promise<any>}
 */
export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
