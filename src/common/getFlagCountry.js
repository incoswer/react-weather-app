import ru from '../icons/countries/ru.svg'
import china from '../icons/countries/china.svg'
import usa from '../icons/countries/united-states-of-america.svg'
import tokyo from '../icons/countries/japan.svg'
import britain from '../icons/countries/british-virgin-islands.svg'
import oae from '../icons/countries/united-arab-emirates.svg'

export function getFlagCountry (name){
    switch (name){
        case 'RU':
            return ru
        case  'US':
            return usa
        case 'CN':
            return china
        case 'JP':
            return tokyo
        case 'GB':
            return britain
        case 'AE':
            return oae
        default:
            return null
    }
}