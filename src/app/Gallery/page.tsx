// pages/index.tsx
import Card from '../components/card';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        imageUrl="/images/IMG_20221219_215656.jpg"
        title="Unicorn Theme Birthday Setup"
        description="Unicorn Theme setup"
        price={15000}
      />
      <Card
        imageUrl="/images/IMG_20230805_195910.jpg"
        title="Princes Theme"
        description="Princess theme Birthday Setup"
        price={25000}
      />
      <Card
        imageUrl="/images/IMG_20230812_193309.jpg"
        title="unicorn theme"
        description="unicorn theme"
        price={150}
      />
      <Card 
      imageUrl="/images/IMG_20230820_195952.jpg"
      title='Jungle Theme'
      description='Jungle theme Birthday Setup'
      price={100}/>
    </div>
  );
}
