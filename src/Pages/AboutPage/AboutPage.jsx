const AboutPage = () => {
 const maxNumber = (arr) => {
    const max = Math.max(...arr)
    console.log(max)
 }
 maxNumber([-1, -2, -3, -4])

  return (
    <div>
      <h3>About page</h3>
    </div>
  );
};

export default AboutPage;
