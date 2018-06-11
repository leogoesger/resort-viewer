import React from 'react';

const AboutProject = () => (
  <div>
    <h1>About this project</h1>
    <p>
      {
        'The focus for starting this project is to learn more about functional programming by using libraries like folktale and recomopse. Therefore, some part of the application could have been done much easier without a library. Looking through the code, you will see many implementation of HOCs using Recompose for code reusebility and Folktale for managing side effects.'
      }
    </p>
    <h3>Completed:</h3>
    <ul>
      <li>
        {
          'Using HOC for uploads: This will give flexibility for future different parsing algo. This can also benefit uploading other type of files like xml and etc. Since upload is considered a side effect, I used task from folktale to keep the function pure.'
        }
      </li>
      <li>
        {
          'Mapping: This feature is rather limited currently, because user has to provide the csv with 11 fields(no more, no less). But it does provide the flexibility for user to map out their csv to expected csv.'
        }
      </li>
      <li>
        {
          'Table display: A simple material ui functional component aiming for reusebility. You can use "recompose" library or your own HOC to wrap around the table component to give more features.'
        }
      </li>
      <li>
        {
          "Resort display: Demoing React's composition. Container -> Layout -> (components ...)"
        }
      </li>
      <li>
        {
          'Tests: e2e test with nightmare and jest for spec testing using Jest(matchsnapshot)'
        }
      </li>
      <li>{'CI: Travis'}</li>
    </ul>
    <h3>{'Can be done:'}</h3>
    <ul>
      <li>{'Map: Add mapbox to display all ski resorts'}</li>
      <li>
        {
          'Images are loading really slow. We can clean up those images and serve compressed images. Or we can combine all logo into one image, and use css to get current logo from that image.'
        }
      </li>
      <li>{'Option to upload any amount of fields.'}</li>
      <li>{'Sorting'}</li>
    </ul>
    <a
      className="social-links"
      href="https://github.com/leogoesger/resort-viewer"
    >
      {'Github: https://github.com/leogoesger/resort-viewer'}
    </a>
  </div>
);

export default AboutProject;
