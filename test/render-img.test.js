import renderImage from '../src/render-img.js';
import images from '../data/images.js';


const test = QUnit.test;

QUnit.module('Render Img');

test('render an img', assert => {
    // arrange
    const exampleImage = images[0];
    const expected = /*html*/ ` 
    <li class="card">
    <div>
        <h2>UniWhal</h2>                                
        <p>Horns: 1</p>
    </div>
    <div class="img-contain" title="A unicorn and a narwhal nuzzling their horns">
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
    </div>
</li>`;

    // act
    const html = renderImage(exampleImage);
    // assert
    assert.htmlEqual(html, expected);
});