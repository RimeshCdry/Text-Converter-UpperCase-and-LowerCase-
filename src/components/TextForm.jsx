import React, {useState} from 'react'

 function TextForm(props) {

    const [text,setText] = useState("Write Something ...")

    const clickUpHandler = () =>{
        // console.log("button was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const clickLwHandler = () =>{
        // console.log("button was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const changeHandler = (event) =>{
        // console.log("Changed")
        setText(event.target.value)
    }

  return (
<>
    <div className="col-span-full py-6 w-screen bg-sky-400 h-screen">


        <h1 className='text-center text-3xl font-semibold mt-5 mb-4 text-white'>Write Some Text Here</h1>
        <div className="mx-auto w-128">

               

            <textarea onChange={changeHandler}
            id="mytext" name="mytext" rows="8" value={text}  className=" block container rounded-md border-2 outline-none p-3 mx-auto text-gray-900 shadow-lg placeholder:text-gray-400 ring-1 ring-inset ring-gray-300">

            </textarea>
                <div  className='flex align-center gap-4'>
                    <button onClick={clickUpHandler}
                    className='block px-4 py-2 bg-red-500 mt-3 rounded-md text-white font-medium  shadow-lg shadow-red-500/50'>
                        Convert to UpperCase
                        </button>

                    <button onClick={clickLwHandler}
                    className='block px-4 py-2 bg-cyan-800 mt-3 rounded-md text-white font-medium  shadow-lg shadow-cyan-800/50'>
                        Convert to LowerCase
                        </button>
                </div> 

                <div className='bg-white mt-4 p-5 rounded-lg outline-none shadow-xl'>
                
                <h2 className='text-3xl mb-2 text-blue-700 font-bold'>Text Summary</h2>
                <p className='font-sans'>{text.split(" ").length} Words and {text.length} Characters</p>

                <h2 className='text-2xl mb-1 mt-2 font-sans text-red-700 font-bold'>Text Preview </h2>
                <p>{text}</p>

                <h2 className='text-2xl mb-1 mt-9 font-sans text-cyan-400 font-bold'>Time to Read Text</h2>
                <p>{0.008 * text.split(" ").length}</p>

        </div>
        </div>

        
    </div>

        
</>
   
  )
}
export default TextForm
