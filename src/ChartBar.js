//in react if you want touse style it gets two curly braces {{}} first for js syntax second it wants a js obj to apply css
//style={{"background-color:red" or use CamelCase without double quotes which is backgroundColor}}

export default function ChartBar(props) {
  let barFill = Math.round(props.value / props.maxValue) * 100 + '%';

  return (
    <div className="h-10 bg-sky-500 flex justify-around m-6 p-6">
      <div>{props.label}</div>
    </div>
  );
}
