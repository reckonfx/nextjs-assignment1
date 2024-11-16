

const  Contact= () => {
  return (
    <div>
    <div className="flex justify-center items-center m-8 ">
      <form action="#" className="flex flex-col items-center justify-center border-black w-96 h-auto p-5 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-400">
        <label htmlFor="fname" >First Name</label>
        <input type="text" required className="border-black rounded-xl w-72 p-2" />
        <label htmlFor="">Last Name</label>
        <input type="text" required  className="border-black rounded-xl w-72 p-2"/>
        <label htmlFor="">Theme Required</label>
        <input type="text" required className="border-black rounded-xl w-72 p-2" />
        <label htmlFor="">Vanue</label>
        <input type="text" required className="border-black rounded-xl w-72 p-2" />
        <label htmlFor="">Event Date</label>
        <input type="date" required className="border-black rounded-xl w-72 p-2"/>
        <label htmlFor="">Conatct Number</label>
        <input type="number" required className="border-black rounded-xl w-72 p-2"/>
        <button className="mt-5  px-4 border-black border-2 rounded-md text-grey-600 font-semibold bg-orange-200 hover:bg-orange-600">Submit</button>
      </form>
    </div>
    <p className="text-center m-5">Note: After Filling the form, just relax one of our team member will get in touch with you to discuss more details</p>

    </div>
  )
}

export default Contact
