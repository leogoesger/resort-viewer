import React from 'react';

const AboutProject = () => (
  <div>
    <h1>About this project</h1>
    <p>
      {
        'The focus for starting this project is to learn more about functional programming by using libraries like Folktale and Recompose. Some parts of the application could have been done much easier without a library. Looking through the code, you will see many implementations of HOCs using Recompose for code reusability and Folktale for managing side effects.'
      }
    </p>
    <h3>Completed:</h3>
    <ul>
      <li>
        {
          'Using HOC for uploads: This will give flexibility in the future for different parsing algos. This can also benefit uploading other type of files like xml, etc. Since uploading is considered a side effect, I used tasks from Folktale to keep the function pure.'
        }
      </li>
      <li>
        {
          'Mapping: This feature is rather limited currently, because the user has to provide the csv with 11 fields (no more, no less). But it does provide flexibility for the user to map out their csv to the expected csv.'
        }
      </li>
      <li>
        {
          'Table display: A simple material ui functional component aiming for reusebility. You can use "recompose" library or your own HOC to wrap around the table component to give more features.'
        }
      </li>
      <li>
        {
          "Resort display: Demoing React's composition. Container -> Layout -> (components ...)."
        }
      </li>
      <li>
        {
          'Tests: e2e test with nightmare and jest for spec testing using Jest (matchsnapshot).'
        }
      </li>
      <li>{'CI: Travis'}</li>
    </ul>
    <h3>{'Can be done:'}</h3>
    <ul>
      <li>{'Map: add mapbox to display all ski resorts.'}</li>
      <li>
        {
          'Images are loading really slow. We can clean up those images and serve compressed images. Or we can combine all logos into one image, and use css to get the current logo from that image.'
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
