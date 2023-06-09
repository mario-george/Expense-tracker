import { useState, useContext, useEffect } from 'react';
import SelectFilter from './SelectFilter';
import FilteredExpenses from './FilteredExpenses';
/*
create Context
import React from 'react'
make a js file
const AuthContext= React.createContext({isLoggedIn:false}) an obj that also contains acomponent

export default AuthContext
then import it in the other file and use it as a wrapper
so all the compoenents between <AuthContext.Provider>
all the between components and its children will have access to that context
</AuthContext.Provider>
now in the file you want to use it 
<AuthContext.Consumer>
takes a child in {}as anon fn
{(ctx)=>{
  return(jsx code)
}}
</AuthContext.Consumer>
the ctx is whatever you gave to it when you init it which is an obj as above
in the {} you should return the jsx code that needs to access that context
it will crash because it is a static value so we need to remove the Provider
but often we will use dynamic values
adding avalue  prop to providerwill remove it 
<AuthContext.Provider value={{isLoggedIn:false}}>
or dynamic value using useState
const[isLoggedIn,SetisLoggedIn]=useState(false) false is the def value

<AuthContext.Provider value={{isLoggedIn:isLoggedIn}}>
aanother way to use context alternative to provider/consumer
is useContext hook after importing from React
const ctx = useContext(pointer to the context which u wanna use)
const ctx = useContext(AuthContext) inside the component fn
ctx.isLoggedin can be accessed from the jsx code in the return inside the component fn/class
ctx now contain the obj which we passed
it can havein the provider a pointer to a handler like onLogOut which points to a handler in the calling component
we can pass values inside the provider obj and fn aswell
in the def context obj type dummy values for the values you will be passing to provider
to get IDE autocompletion
React useContext is not for frequently changes


if a key changes in the useContext in case it is an object
it will rerender every component that access that context or wrapped by the provider 
even if it's not utilizing the state data or key that changed

------------------------------------------
React hooks is only used in custom hooks or a component function (which returns a jsx code)







*/
export default function ExpenseForm(props) {
  const ctx = useContext(FilteredExpenses);
  // const [enteredTitle,setEnteredTitle]=useState('')
  // const [entereddate,setEnteredDate]=useState('')
  // const [enteredAmount,setEnteredAmount]=useState('')
  //   const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value)
  // };
  // const AmountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value)
  // };
  // const DateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value)
  // };
  // useEffect(() => {
  //   if (ctx.filteredarray.length === 0) {
  //     const w = a.map((e, i) => {
  //       document.getElementById(e.date.getMonth() + '').classList.remove(b[i]);
  //       a.shift();
  //       return 1;
  //     });
  //   }
  // }, [ctx.filter, ctx.filteredarray]);
  // let a = [];
  // let b = [];
  // var chfilter;
  const [x, setX] = useState(false);
  // useEffect(() => {
  //   if (x === true) {
  //     const newArra3 = new Array(11).fill(1).map((e, i) => {
  //       var parent = document.getElementById(i + '');
  //       var el = document.getElementById(i + '');
  //       var child = document.getElementById('child');
  //       console.log(el.children[0], 'is the children');
  //       if (child != null) {
  //         child.remove();
  //       }

  //       if (el.hasChildNodes()) {
  //         if (el.firstChild) {
  //           el.removeChild(el.firstChild);
  //         }
  //       }

  //       console.log('this is executed');
  //       setX(false);
  //     });
  //   }
  // }, [x]);
  // useEffect(() => {
  //   console.log(ctx.filteredarray);
  //   let allAmount = ctx.filteredarray.map((e) => {
  //     return e.amount;
  //   });
  //   let MaxVal = Math.max(...allAmount);
  //   console.log(MaxVal, 'is max val');

  //   const newArray = ctx.filteredarray.map((e) => {
  //     var el = document.createElement('div');

  //     let n = (e.amount / MaxVal) * 100;
  //     let l = 'h-' + '[' + n + '%' + ']';

  //     var child = document
  //       .getElementById(e.date.getMonth() + '')
  //       .appendChild(el);
  //     child.classList.add(l);

  //     child.classList.add('bg-red-500');
  //     child.classList.add('w-5');
  //     child.classList.add('rounded-lg');
  //     child.classList.add('transition-all');
  //     child.classList.add('duration-1000');
  //     child.setAttribute('id', 'child');
  //     return l;
  //   });
  // console.log(ctx.filter, 'is the filtered ');
  // if (ctx.filter != chfilter) {
  //   const newArray2 = new Array(12).fill(1).map((e, i) => {
  //     document.getElementById(i + '').innerHTML = '';
  //     return 1;
  //   });
  // }
  //   // console.log(chfilter, 'chfilter');
  //   console.log(ctx.filter, 'ctx.filter');
  //   setX(true);
  //   document.getElementById(5 + '').classList.add('h-[1]');
  // }, [ctx.filter, ctx.filteredarray]);

  //replace 3 states to one state only
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  //{...userInput,setEnteredTitle:event.target.value} ... is the spread operator it takes the keys from the followed object and puts it into that obj and we can override keys after

  //setUserInput({ ...userInput, enteredTitle: event.target.value }); it would work but if more than one state is scheduled it may give wrong old state we need to use arrow function instead and take the prevState and extend that and return it

  const titleChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const AmountChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setUserInput(() => {
      return { ...userInput, enteredAmount: event.target.value };
    });
  };
  const DateChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    setUserInput(() => {
      return { ...userInput, enteredDate: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const userI = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    //new Date takes the entered date as a string and parse it and convert into date
    setUserInput({ enteredTitle: '', enteredAmount: '', enteredDate: '' });
    props.onSaveExpenseItem(userI);
  };
  //in event listeners we automatically get event prop and it have a key target and a value
  //event.target.value always return a string even if it is a number

  const SelectFilterHandler = (passed) => {
    props.onSelect(passed);
  };
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    let allAmount = ctx.filteredarray.map((e) => {
      return e.amount;
    });
    let MaxVal = Math.max(...allAmount);
    console.log(MaxVal, 'is max val');
    setCharts(
      new Array(12).fill(1).map((element, i) => {
        let apply = 0;
        return (
          <div className="flex justify-end items-end rounded-2xl delay-150 h-[10rem] w-[2rem]  bg-rose-100 transition duration-200 ease-in-out">
            {ctx.filteredarray.map((e) => {
              let n = (e.amount / MaxVal) * 100;
              let l = 'h-' + '[' + n + '%' + ']';
              if (e.date.getMonth() == i && apply == 0) {
                apply = 1;
                let rand = Math.random().toString();
                console.log(rand);

                return (
                  <>
                    <div
                      className={`w-full  rounded-2xl bg-rose-200     `}
                      id={`${rand.toString()}`}></div>
                    {setTimeout(() => {
                      document.getElementById(rand).classList.add(`transition-[10rem]`);
                      document.getElementById(rand).classList.add(`duration-500`);
                      document.getElementById(rand).classList.add(`${l}`);
                    }, 100) ? '' : null}
                  </>
                );
              }
            })}
          </div>
        );
      })
    );
  }, [ctx.filter, ctx.filteredarray]);

  return (
    <div className="h-[25rem] border border-purple-200 rounded-xl bg-purple-200 ">
      <form
        onSubmit={submitHandler}
        className="mt-3 grid grid-cols-8 grid-rows-3 gap-5 mb-4">
        <label className="font-bold">Title</label>
        <input
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
          className="border rounded-xl col-span-3"
          type="text"
        />
        <label className="font-bold">Amount</label>
        <input
          value={userInput.enteredAmount}
          onChange={AmountChangeHandler}
          className="border rounded-xl col-span-3"
          type="number"
          min="0.01"
          step="0.01"
        />
        <label className="font-bold">Date</label>
        <input
          value={userInput.enteredDate}
          onChange={DateChangeHandler}
          className="border rounded-xl col-span-3"
          type="date"
          min="2019-01-01"
          max="2022-12-31"
        />
        <SelectFilter onSelectFilter={SelectFilterHandler} />
        <div></div>
        <button
          className="row-start-3 col-start-8 border text-bold p-[0.5px] bg-purple-500 text-sm rounded-xl  "
          type="submit">
          <p className="text-red-500 font-bold p-[0.5px]">Add Expense</p>
        </button>
      </form>
      <div className="flex flex-row justify-around h-[5rem] transition duration-200 ease-in-out">
        {charts}
      </div>
      <div className="flex flex-col text-sm justify-around">
        {/* <div className="flex justify-around">
          <div className="bg-rose-100 h-20 w-5 rounded-lg">
            <div
              className="flex justify-end  h-20  w-5 rounded-lg transition-all  duration-1000"
              id="0"></div>
          </div>

          <div className="bg-rose-100 h-20 w-5 rounded-lg">
            <div
              className="flex justify-end h-20 w-5 rounded-lg transition-all  duration-1000"
              id="1"></div>
          </div>
          <div className="bg-rose-100 h-20 w-5 rounded-lg">
            <div
              className="flex justify-end  h-full  w-5 rounded-lg transition-all duration-1000 duration-1000"
              id="2"></div>
          </div>
          <div className="bg-rose-100 h-20 w-5 rounded-lg">
            <div
              className="flex justify-end  h-full  w-5 rounded-lg transition-all duration-1000 duration-1000"
              id="3"></div>
          </div>
          <div className="bg-rose-100 h-20 w-5 rounded-lg">
            <div
              className="flex justify-end  h-full  w-5 rounded-lg transition-all duration-1000 duration-1000"
              id="4"></div>
          </div>
          <div className="bg-rose-100 h-20 w-5 rounded-lg flex items-end justify-center">
            <div
              className="flex justify-end h-full  transition-all w-5 rounded-lg  duration-1000"
              id="5"></div>
          </div>
          <div className="bg-rose-100 h-20 w-5 rounded-lg">
            <div
              className="flex justify-end  h-full  w-5 rounded-lg transition-all duration-1000 duration-1000"
              id="6"></div>
          </div>
          <div className="bg-rose-100 h-20 w-5 rounded-lg">
            <div
              className="flex justify-end  h-full  w-5 rounded-lg transition-all duration-1000 duration-1000"
              id="7"></div>
          </div>
          <div className="bg-rose-100 h-20 w-5 rounded-lg">
            <div
              className="flex justify-end  h-full  w-5 rounded-lg transition-all duration-1000 duration-1000"
              id="8"></div>
          </div>
          <div className="bg-rose-100 h-20 w-5 rounded-lg">
            <div
              className="flex justify-end  h-full  w-5 rounded-lg transition-all duration-1000 duration-1000"
              id="9"></div>
          </div>
          <div className="bg-rose-100 h-20 w-5 rounded-lg">
            <div
              className="flex justify-end  h-full  w-5 rounded-lg transition-all duration-1000 duration-1000"
              id="10"></div>
          </div>
          <div className="bg-rose-100 h-20 w-5 rounded-lg">
            <div
              className="flex justify-end   h-full  w-5 rounded-lg transition-all duration-1000 duration-1000"
              id="11"></div>
          </div>
        </div> */}
        <div className="translate-y-[5rem]  ml-2 flex text-xs justify-between ">
          <div className="translate-x-[1rem]">janurary</div>
          <div>feburary</div>
          <div className="-translate-x-[1rem]">Mars</div>
          <div className="-translate-x-[1rem]">April</div>
          <div className="-translate-x-[1rem]">May</div>
          <div className="-translate-x-[1rem]">June</div>
          <div className="-translate-x-[1rem]">July</div>
          <div className="-translate-x-[1rem]">September</div>
          <div className="-translate-x-[2rem]">October</div>
          <div className="-translate-x-[3rem]">November</div>
          <div>December</div>
        </div>
      </div>
    </div>
  );
}
