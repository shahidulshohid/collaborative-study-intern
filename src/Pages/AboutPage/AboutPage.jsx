const AboutPage = () => {
 const maxNumber = (arr) => {
    // const max = Math.max(...arr)
    // console.log(max)
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        console.log(max)
    }
 }
//  maxNumber([-1, -2, -3, -4])
maxNumber([1,2,3,4,5])

  return (
    <div>
      <h3>About page</h3>
    </div>
  );
};

export default AboutPage;
