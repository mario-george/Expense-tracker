export default function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className="bg-black border border-blue-400 rounded-xl justify-between flex text-white h-25">
      <div className="flex flex-col border border-blue-400 rounded-xl">
        <h1 className="font-bold text-center">{month}</h1>
        <h1 className="text-center">{year}</h1>
        <h1 className="font-bold text-center">{day}</h1>
      </div>
      <h1 className=" font-bold mt-[20px]">{props.title}</h1>
      <h1 className="border-2 bg-purple-600 text-white font-bold mb-5 px-2 rounded-xl border-white py-2 mt-[20px]">{`${props.amount}$`}</h1>
    </div>
  );
}
