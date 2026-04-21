import https from 'https';

https.get('https://celoxus.com', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src="([^">]+logo[^">]+)"/ig);
    console.log(matches);
  });
}).on('error', (e) => {
  console.error(e);
});
