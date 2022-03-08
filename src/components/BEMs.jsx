// http://getbem.com/naming/

function BEMs() {
  return (
    <div className="container">
      <div className="bem main bem--bg-wheat">
        <div className="bem bem__elem one">one</div>
        <div className="bem bem__elem two">two</div>
        <div className="bem bem__elem two one">two one</div>
        <div className="bem--bg-aquamarine">
          <div className="bem__elem">three</div>
          <div className="bem__elem bem--red-border">four</div>
        </div>
        <div className="bem--bg-chocolate">
          <div className="bem__elem">five</div>
          <div className="bem__elem">six</div>
        </div>
        <div className="bem bem--no-border">
          <ul className="ul__one">
            <li>a</li>
            <li className="special_li">b</li>
            <li>c</li>
          </ul>
          <ul className="ul__two">
            <li>a</li>
            <li className="special_li">b</li>
            <li>c</li>
          </ul>
          <ul className="ul__three">
            <li>
              <a href="one">one</a>
            </li>
            <li className="special_li">
              <a href="#two">two</a>
            </li>
            <li>
              <a href="three">three</a>
            </li>
          </ul>
        </div>
        {/* <div className="bem">
          
        </div> */}
      </div>
    </div>
  );
}

export default BEMs;
