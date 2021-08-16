import Data from "../data/data";

const month = ["January", "Fabuary", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];

const getData = () => {
    const reward = (num) => {
        if(num > 100){
            return ((num-100)*2) + 50;
        }else if(num === 100){
            return 50;
        }else if(num > 50){
            return num-50;
        }else{
            return 0;
        }
    }
    let tempData = [];
    Data.map(item => {
        let date = new Date(item.date);
        var obj = {
            cus_id: item.cus_id,
            name: item.name,
            date: [{date: month[date.getMonth()],amt: Number(item.amt.split('$')[1]),reward: reward(Number(item.amt.split('$')[1]))}]
        };
        tempData.push(obj);
    }); 
    
    const result = tempData.reduce((r, {cus_id, date, name, amt}) => {
        if(r.get(cus_id)) {r.get(cus_id).date.push(...date)}
        else {r.set(cus_id, {cus_id,date,name})}
        return r;
      }, new Map).values();
      const resultdata = [...result];
      resultdata.map(item => {
        const date = item.date.reduce((r,{date,amt, reward}) => {
            if(r.get(date)) {r.get(date).amt+=amt;r.get(date).reward+=reward;}
        else {r.set(date, {date,amt,reward})}
        return r;
        
    }, new Map).values();
    item.date = [...date ];
      });
    return resultdata;
}

export default getData;