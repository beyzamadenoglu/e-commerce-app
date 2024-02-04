import background from '/Users/beyzamadenoglu/Desktop/e-commerce-app/get-mobil/public/images/background.jpg';

export const images: any[] = [background, background, background, background];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;

