import faker from "faker";

export default function infoFactory(num) {
  const info = [];
  for (let i = 0; i < num; i++) {
    const image = faker.image.avatar();

    const randomWord = faker.name.findName();

    info.push({ url: image, name: randomWord });
  }
  return info;
}
