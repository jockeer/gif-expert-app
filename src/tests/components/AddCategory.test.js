import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Prueba en <AddCategory />', () => { 

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>)
    
    beforeEach(()=>{
        jest.clearAllMocks(); //! para limpiar simulaciones
        wrapper = shallow( <AddCategory setCategories={setCategories}/>)

    })

    test('Debe mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()

    })

    test('Debe cambiar la caja de texto', () => { 

        const input = wrapper.find('input')
        const value = ' Hola mundo '
        input.simulate('change', { target:{value} })
        expect(wrapper.find('p').text().trim()).toBe(value.trim())

    })

    test('NO debe postear la informacion con submit si el input esta vacio', () => { 
        
        wrapper.find('form').simulate('submit',{ preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled()

    })

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {  
        
        //1.- simular el inputchange
        const input = wrapper.find('input')
        input.simulate('change', { target:{value:'Pokemon'} })
        
        //2.- simular el sumbit
        wrapper.find('form').simulate('submit',{ preventDefault(){} })
        
        //3.- setCategories se debe llamar
        expect( setCategories ).toHaveBeenCalled()
        expect( setCategories ).toHaveBeenCalledTimes(1)
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function))

        //4.- el valor del imput debe estar ''
        expect(input.prop('value')).toBe('')
    })

})