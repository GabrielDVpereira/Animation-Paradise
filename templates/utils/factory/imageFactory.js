import faker from "faker";

export default function imageFactory(num) {
  const images = [];
  for (let i = 0; i < num; i++) {
    const image = faker.image.avatar();

    const randomWord = faker.lorem.words();

    images.push({ url: image, text: randomWord });
  }
  return images;
}
