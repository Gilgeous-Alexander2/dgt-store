import './CSS Styles/Form.css'
import { useTranslation } from 'react-i18next';


export default function Form(){

    const {t} = useTranslation();

    return<>
    <div className="bottom">
        <div className="contacts-form">
            <form>
                <div className="title">{t('Form.Title')}</div>
                <div className="form-left">
                    <span>
                        <input type="text" placeholder={t('Form.Name')}></input>
                    </span>
                    <span>
                        <input type="text" placeholder={t('Form.Phone')}></input>
                    </span>
                    <span>
                        <input type="text" placeholder={t('Form.City')}></input>
                    </span>
                    <span>
                        <input type="text" placeholder={t('Form.Country')}></input>
                    </span>
                </div>
                <div className="form-right">
                    <span>
                        <input type="text" placeholder={t('Form.Model')}></input>
                    </span>
                    <span>
                        <textarea placeholder={t('Form.Questions')}></textarea>
                    </span>
                </div>
                <div className="submit-button">
                    <input type="submit" value={t('Form.Send')}></input>
                    <span className="wpcf7-spinner"></span>
                </div>
            </form>
        </div>
        
    </div>
    </>
}