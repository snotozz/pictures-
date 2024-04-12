import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=16KLWfLKBc98Jr0i7gC9LI8FHTUftvI-93zG2-_OAWE'
    
    const response = await axios.get(url, {
        params:{
            query: 'cars'
        }
    })

    console.log(response)
}

export default searchImage