import { Card, Image, Text } from '@mantine/core';

const CategoriesCard = ({ id, image, text }: any) => {

  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href={`/${id}`}
      target="_blank"
    >
      <Card.Section>
        <Image
          src={image}
          h={500}
          alt="Categories Card"
        />
      </Card.Section>
      <Text fw={500} size="lg" mt="md">
      { text }
      </Text>
    </Card>
  );
}

export default CategoriesCard;