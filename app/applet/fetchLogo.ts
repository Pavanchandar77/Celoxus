import fs from 'fs';

async function test() {
  const res = await fetch("https://celoxus.com");
  const text = await res.text();
  console.log(text.substring(0, 1000));
  const logoMatch = text.match(/<img[^>]+logo[^>]+>/ig);
  console.log("LOGOS: ", logoMatch);
}
test();
