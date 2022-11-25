import { Settings } from '@mui/icons-material';
import {render,screen,cleanup} from '@testing-library/react';
import { icons } from 'react-icons';
import Icons from '../icons';
import Todo from '../todo';

test('should render Levin title ',()=> {
    const todo= {id:1,title:'Levin',completed:false};
    render(<Todo todo ={todo}/>);
    const todoElement =screen.getByTestId('LevinTitle-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('LEVIN');
    
})

test('should render icons ',()=> {
    const todo= {id:1,title:'Levin',completed:false};
    render(<Icons icons ={icons}/>);
    const todoElement =screen.getByTestId('LevinIcons-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('LEVIN-Icons');
    
   
})

test('should render Settings ',()=> {
    const todo= {id:1,title:'Levin',completed:false};
    render(<Icons icons ={icons}/>);
    const todoElement =screen.getByTestId('LevinIcons-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('LEVIN-Icons');
    
   
})

test('should render Private Policy ',()=> {
    const todo= {id:1,title:'Levin',completed:false};
    render(<Icons icons ={icons}/>);
    const todoElement =screen.getByTestId('LevinIcons-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('LEVIN-Icons');
    
   
})

test('should render Terms and Conditions ',()=> {
    const todo= {id:1,title:'Levin',completed:false};
    render(<Icons icons ={icons}/>);
    const todoElement =screen.getByTestId('LevinIcons-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('LEVIN-Icons');
    
})

test('should render Setting up Tests ',()=> {
    const todo= {id:1,title:'Levin',completed:false};
    render(<Icons icons ={icons}/>);
    const todoElement =screen.getByTestId('LevinIcons-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('LEVIN-Icons');
    
})








