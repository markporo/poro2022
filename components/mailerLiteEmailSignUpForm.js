import { useEffect } from 'react';
import styles from '/styles/components/mailerLite.module.scss';

export default function MailerLiteEmailSignUpForm() {
  useEffect(() => {
    // Inline script for handling form success
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      function ml_webform_success_17102286() {
        var $ = ml_jQuery || jQuery;
        $('.ml-subscribe-form-17102286 .row-success').show();
        $('.ml-subscribe-form-17102286 .row-form').hide();
      }
    `;
    document.body.appendChild(inlineScript);

    // External script for MailerLite
    const externalScript = document.createElement('script');
    externalScript.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127";
    externalScript.type = "text/javascript";
    document.body.appendChild(externalScript);

    // Fetch script as a dynamic resource (no JSON handling)
    const fetchScript = document.createElement('script');
    fetchScript.src = "https://assets.mailerlite.com/jsonp/1058959/forms/129312833741522845/takel";
    fetchScript.type = "text/javascript";
    document.body.appendChild(fetchScript);

    // Cleanup scripts when the component unmounts
    return () => {
      document.body.removeChild(inlineScript);
      document.body.removeChild(externalScript);
      document.body.removeChild(fetchScript);
    };
  }, []);

  return (
    <div id="mlb2-17102286" className={`${styles['ml-form-embedContainer']} ${styles['ml-subscribe-form']} ${styles['ml-subscribe-form-17102286']}`}>
      <div className={styles['ml-form-align-center']}>
        <div className={styles['ml-form-embedWrapper']}>

          <div className={`${styles['ml-form-embedBody']} ${styles['ml-form-embedBodyDefault']} ${styles['row-form']}`}>
            <div className={styles['ml-form-embedContent']}>
              <h4>Sign Up for the Email Club!</h4>
              <p>Hear songs, news, info, special offers before anyone else!</p>
            </div>

            <form 
              className={styles['ml-block-form']} 
              action="https://assets.mailerlite.com/jsonp/1058959/forms/129312833741522845/subscribe" 
              method="post" 
              target="_blank"
            >
              <div className={styles['ml-form-formContent']}>
                <div className={styles['ml-form-fieldRow']}>
                  <div className={`${styles['ml-field-group']} ${styles['ml-field-email']} ${styles['ml-validate-email']} ${styles['ml-validate-required']}`}>
                    <input 
                      aria-label="email" 
                      aria-required="true" 
                      type="email" 
                      className={styles['form-control']} 
                      name="fields[email]" 
                      placeholder="Email" 
                      autoComplete="email" 
                    />
                  </div>
                </div>
                <div className={styles['ml-form-fieldRow']}>
                  <div className={styles['ml-field-group']}>
                    <input 
                      aria-label="name" 
                      type="text" 
                      className={styles['form-control']} 
                      name="fields[name]" 
                      placeholder="Name" 
                      autoComplete="given-name" 
                    />
                  </div>
                </div>
                <div className={styles['ml-form-fieldRow']}>
                  <div className={styles['ml-field-group']}>
                    <input 
                      aria-label="last_name" 
                      type="text" 
                      className={styles['form-control']} 
                      name="fields[last_name]" 
                      placeholder="Last name" 
                      autoComplete="family-name" 
                    />
                  </div>
                </div>
                <div className={`${styles['ml-form-fieldRow']} ${styles['ml-last-item']}`}>
                  <div className={styles['ml-field-group']}>
                    <input 
                      aria-label="city" 
                      type="text" 
                      className={styles['form-control']} 
                      name="fields[city]" 
                      placeholder="City" 
                    />
                  </div>
                </div>
              </div>

              <input type="hidden" name="ml-submit" value="1" />

              <div className={styles['ml-form-embedSubmit']}>
                <button type="submit" className={styles['primary']}>Subscribe</button>
                <button disabled style={{ display: 'none' }} type="button" className={styles['loading']}>
                  <div className={styles['ml-form-embedSubmitLoad']}></div>
                  <span className={styles['sr-only']}>Loading...</span>
                </button>
              </div>

              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>

          <div className={`${styles['ml-form-successBody']} ${styles['row-success']}`} style={{ display: 'none' }}>
            <div className={styles['ml-form-successContent']}>
              <h4>THANK YOU!</h4>
              <p>I've put you on the list. Thanks for signing up to receive emails from me!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
