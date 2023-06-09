//when using Math.max(it accepts comma seperated values )
// we can use the ... spread operator to the array to give standalone arguments
//Math.max(...array)
//for(const expense in expenses)for in loop used for objects
//for(const expense of expenses)for of loop used for arrays

export default function Chart(props) {
  //we need to pass datapoints={} when calling chart and it is saved in props.datapoints and it will be an array so we use map and each index is in obj which has the keys label value maxValue
  return (
    <div>
      
      {props.datapoints.map((dp) => {
        return (
          <Chart
            value={dp.value}
            maxValue={dp.maxValue}
            key={dp.label}
            label={dp.label}
          />
        );
      })}
    </div>
  );
}
