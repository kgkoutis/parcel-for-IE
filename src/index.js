import "./styles.css";
import {jokes} from "./jokes.js";
import $ from 'jquery';

document.getElementById("app").innerHTML = `
<h1>Hello Parcel for IE11!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;


//import fs from 'fs';

jokes.getOne()
    .then(data =>
        $('#joke').text(data)
    )