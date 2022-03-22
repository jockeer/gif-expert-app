
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componente <GifGrid />', () => { 
    
    const category = 'Pokemon'

    test('Debe mostrar el componente correctamente', () => {  

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot()

    })
    
    test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {  
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Cualquier Cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    })

})