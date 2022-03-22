import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe(' Pruebas en <GifGridItem />', () => { 
    
    const url = 'https://localhost/hola.jpg' 
    const title = 'google'
    const wrapper = shallow(< GifGridItem title={title} url={url} />)

    test('Debe mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe tener un parrafo con el Title', () => {  

        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    
    })

    test('Debe tener una imagen igual al url y alt de los props', () => {  
        const img = wrapper.find('img');

        // console.log(img.props().src) //!pa analizar varias propiedades
        expect(img.prop('src')).toBe(url) //!pa analizar una sola propiedad
        expect(img.prop('alt')).toBe(title)
    })

    test('Debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true)
    })

})