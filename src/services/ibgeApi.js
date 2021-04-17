import axios from 'axios'

export const ibgeAPI = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
})

export async function getCities(uf) {
    const options = {
        url: `/${uf}/municipios`,
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }
    const cities = await ibgeAPI(options)
        .then(res => res.data)
        .catch(err => err)

    return cities.map(city => city.nome)
}