import {useRouter} from 'next/router'

const LangChanger = () => {
    const router = useRouter()

    const changeLanguage = async (locale) => {
        await router.push(
            {
                pathname: router.route,
                query: router.query
            },
            router.asPath,
            {locale}
        )
    }

    return (
      <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="az">az</option>
          <option value="en" className='text-black'>en</option>
      </select>
    )
}

export default LangChanger