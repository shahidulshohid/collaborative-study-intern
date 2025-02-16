const AboutPage = () => {
    let dict = {};
    for (let i = 0; i < n; i++) {
        const arrItem = readLine().split(' ');
        const key = arrItem[0];
        const value = parseInt(arrItem[1], 10);
        dict[key] = value;
    }
  return (
    <div>
      <h3>About page</h3>
    </div>
  );
};

export default AboutPage;
