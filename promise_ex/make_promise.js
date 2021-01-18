const aa = new Promise((resolve, reject) => {
  resolve(console.log('프로미스 !!'));
});

aa.then(() => {
  console.log('프로미스 실행 완료');
});
