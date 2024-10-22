
export default async function Home(){
  await new Promise((resolve)=>{
    setTimeout(resolve,5000)
  })
  
  return(
    <div className="bg-[url(/celebration.jpg)] bg-cover">
      <h1 className="text-center text-4xl m-5 ">"Welcome to Party Sharty" </h1>
      <h2 className="text-center text-xl font-bold">" <span className="text-violet-700">Your Celebrate</span><span className="text-yellow-500">|</span><span className="text-pink-700">We Decorate</span>  ”</h2>
      <p className="text-center mt-2">“At Party Sharty, we specialize in creating memorable birthday events. From kids' parties to milestone birthdays, we handle every detail to make your celebration stress-free and fun!”</p>
      <h2 className="mt-5 pt-3 text-center text-4xl font-bold text-yellow-700">Our Expertise at Party Sharty:</h2>
      <ul className="font-semibold pb-5">
        <li className="mt-5 font-sans p-3" ><strong>Kids' Themed Parties:</strong> We create magical experiences with customized themes, decorations, and entertainment tailored to your child’s favorite characters and interests.</li>
        <li className="mt-5 font-sans p-3"><strong>Milestone Birthdays:</strong> From sweet 16s to 50th birthday bashes, we design unique celebrations to mark your special moments in style.</li>
        <li className="mt-5 font-sans p-3"><strong>Event Planning & Coordination:</strong> We handle everything—from venue setup, decorations, and catering to entertainment—ensuring your event runs smoothly and stress-free.</li>
        <li className="mt-5 font-sans p-3"><strong>Custom Decorations:</strong> Our creative team brings your vision to life with personalized banners, balloons, backdrops, and more, tailored to your event’s theme.</li>
        <li className="mt-5 font-sans p-3"><strong>Cake & Dessert Table Styling:</strong> We specialize in stunning cake displays and dessert tables that are not only visually appealing but also deliciously satisfying.</li>
        <li className="mt-5 font-sans p-3"><strong>Professional Event Management:</strong> With years of experience in party planning, we provide professional service and meticulous attention to detail to ensure every aspect of your event is flawless.</li>
      </ul>
      
    </div>
    
  )
}