import React from "react";

const Blog = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/Bf6LQFh/130614114257-malaysia-food.jpg')] bg-cover bg-fixed py-10">
      <h1 className=" pb-5 text-base md:text-lg text-gray-300 items-center flex justify-center font-semibold">
        Wellcome to
        <span className="text-3xl md:text-5xl text-amber-500 font-akaya ms-2">
          HERO Blogs's
        </span>
      </h1>
      {/* ---------------------- question ---------------------- */}
      <div className="flex justify-center mb-10">
        <div className="card w-10/12 md:w-6/12 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-xl font-bold text-amber-800">
              Differences between controled and uncontroled components.
            </h1>
            <p>
              Controlled components are those where the value is controlled by
              React, while uncontrolled components are those where the value is
              controlled by the DOM.
            </p>
            <p>
              Controlled components rely on the state to manage their values,
              while uncontrolled components rely on refs to access their values.
            </p>
            <p>
              In controlled components, the user input is handled via event
              handlers that update the state, while in uncontrolled components,
              the user input is directly accessed via refarencess.
            </p>
            <p>
              Controlled components can be slower to render, while uncontrolled
              components can be faster.
            </p>
            <p>
              Controlled components provide a one-way data flow, where the
              parent component manages the state and passes it down as props to
              the child components. Uncontrolled components, on the other hand,
              provide a two-way data flow, where the child component can
              directly modify the value of the DOM element.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------- question ---------------------- */}
      <div className="flex justify-center mb-10">
        <div className="card w-10/12 md:w-6/12 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-xl font-bold text-amber-800">
              How to validate react props using proptype?
            </h1>
            React provides a built-in library called prop-types that can be used
            to validate props passed to a component. PropTypes is React's
            internal mechanism for adding type checking to component props.
            React components use a special property called propTypes to set up
            type checking. Here's an example of how to use prop-types to
            validate the props of a React component:
            <p>
              First, install the prop-types library using npm: npm install
              prop-types
            </p>
            <p>
              Import the PropTypes object from the prop-types library at the top
              of your component file: import PropTypes from 'prop-types';
            </p>
            <p>
              Define the expected type and shape of each prop using the
              PropTypes object: <br />
              MyComponent.propTypes = <br />
              name: PropTypes.string.isRequired, <br />
              age: PropTypes.number.isRequired, <br />
              email: PropTypes.string,
            </p>
            <p>
              In this example, the propTypes object specifies that the name and
              age props are required and must be of type string and number
              respectively. The email prop is optional and must be of type
              string. The address prop is an object that has a specific shape
              with required street, city, state, and zip props, each of which
              must be of type string.
            </p>
            <p>
              When a prop fails validation, a warning will be logged to the
              console. You can also use propTypes to document the expected props
              for your component, making it easier for other developers to
              understand how to use your component.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------- question ---------------------- */}
      {/* ---------------------- question ---------------------- */}
      <div className="flex justify-center mb-10">
        <div className="card w-10/12 md:w-6/12 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-xl font-bold text-amber-800">
              Differences between controled and uncontroled components.
            </h1>
            <p>
              Controlled components are those where the value is controlled by
              React, while uncontrolled components are those where the value is
              controlled by the DOM.
            </p>
            <p>
              Controlled components rely on the state to manage their values,
              while uncontrolled components rely on refs to access their values.
            </p>
            <p>
              In controlled components, the user input is handled via event
              handlers that update the state, while in uncontrolled components,
              the user input is directly accessed via refarencess.
            </p>
            <p>
              Controlled components can be slower to render, while uncontrolled
              components can be faster.
            </p>
            <p>
              Controlled components provide a one-way data flow, where the
              parent component manages the state and passes it down as props to
              the child components. Uncontrolled components, on the other hand,
              provide a two-way data flow, where the child component can
              directly modify the value of the DOM element.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------- question ---------------------- */}
      {/* ---------------------- question ---------------------- */}
      <div className="flex justify-center mb-10">
        <div className="card w-10/12 md:w-6/12 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-xl font-bold text-amber-800">
              Differences between controled and uncontroled components.
            </h1>
            <p>
              Controlled components are those where the value is controlled by
              React, while uncontrolled components are those where the value is
              controlled by the DOM.
            </p>
            <p>
              Controlled components rely on the state to manage their values,
              while uncontrolled components rely on refs to access their values.
            </p>
            <p>
              In controlled components, the user input is handled via event
              handlers that update the state, while in uncontrolled components,
              the user input is directly accessed via refarencess.
            </p>
            <p>
              Controlled components can be slower to render, while uncontrolled
              components can be faster.
            </p>
            <p>
              Controlled components provide a one-way data flow, where the
              parent component manages the state and passes it down as props to
              the child components. Uncontrolled components, on the other hand,
              provide a two-way data flow, where the child component can
              directly modify the value of the DOM element.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------- question ---------------------- */}
    </div>
  );
};

export default Blog;
