import "@testing-library/jest-dom";

const {id,title,completed}=todo;
    const h1=<h1>{title}</h1>
    const text = completed? <strike>{h1}</strike>:h1;
    return <div data-testid="LevinTitle-1">LEVIN</div>
