import { useState } from 'react'
import Button from '../../components/Button'
import styles from './Buttons.module.scss'

export default function Buttons() {
  const [loadingButton, setLoadingButton] = useState(false)
  
  const handleLoadingClick = () => {
    setLoadingButton(true)
    setTimeout(() => setLoadingButton(false), 2000)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Button Component Examples</h1>
      
      <section className={styles.section}>
        <h2>Basic Buttons</h2>
        <div className={styles.buttonGrid}>
          <div className={styles.buttonCard}>
            <Button>Default Button</Button>
            <code>{'<Button>Default Button</Button>'}</code>
          </div>
          
          <div className={styles.buttonCard}>
            <Button primary>Primary Button</Button>
            <code>{'<Button primary>Primary Button</Button>'}</code>
          </div>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Link Button</h2>
        <div className={styles.buttonCard}>
          <Button href="https://google.com" target="_blank" rel="noreferrer">Go to Google</Button>
          <code>{'<Button href="https://google.com" target="_blank">Go to Google</Button>'}</code>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Button Sizes</h2>
        <div className={styles.buttonGrid}>
          <div className={styles.buttonCard}>
            <Button size="small">Small</Button>
            <code>{'<Button size="small">Small</Button>'}</code>
          </div>
          
          <div className={styles.buttonCard}>
            <Button size="medium">Medium</Button>
            <code>{'<Button size="medium">Medium</Button>'}</code>
          </div>
          
          <div className={styles.buttonCard}>
            <Button size="large">Large</Button>
            <code>{'<Button size="large">Large</Button>'}</code>
          </div>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Button Variants</h2>
        <div className={styles.buttonGrid}>
          <div className={styles.buttonCard}>
            <Button bordered>Bordered</Button>
            <code>{'<Button bordered>Bordered</Button>'}</code>
          </div>
          
          <div className={styles.buttonCard}>
            <Button rounded>Rounded</Button>
            <code>{'<Button rounded>Rounded</Button>'}</code>
          </div>
          
          <div className={styles.buttonCard}>
            <Button primary rounded>Primary Rounded</Button>
            <code>{'<Button primary rounded>Primary Rounded</Button>'}</code>
          </div>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Button with onClick</h2>
        <div className={styles.buttonCard}>
          <Button onClick={() => alert('Clicked!')}>Click Alert</Button>
          <code>{'<Button onClick={() => alert(\'Clicked!\')}>Click Alert</Button>'}</code>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Disabled Button</h2>
        <div className={styles.buttonCard}>
          <Button disabled onClick={() => alert('Should not show')}>Disabled Button</Button>
          <code>{'<Button disabled onClick={() => alert(\'Should not show\')}>Disabled Button</Button>'}</code>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Loading Button</h2>
        <div className={styles.buttonGrid}>
          <div className={styles.buttonCard}>
            <Button loading>Loading Button</Button>
            <code>{'<Button loading>Loading Button</Button>'}</code>
          </div>
          
          <div className={styles.buttonCard}>
            <Button 
              loading={loadingButton} 
              onClick={handleLoadingClick}
              primary
            >
              {loadingButton ? 'Processing...' : 'Click to Load'}
            </Button>
            <code>{'<Button loading={loading} onClick={...}>Click to Load</Button>'}</code>
          </div>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Custom className</h2>
        <div className={styles.buttonCard}>
          <Button className={styles.customButton} primary>Custom Styled</Button>
          <code>{'<Button className="my-custom-class" primary>Custom Styled</Button>'}</code>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Button with Icon</h2>
        <div className={styles.buttonCard}>
          <Button primary>
            <span role="img" aria-label="Email" style={{ marginRight: '8px' }}>📧</span> 
            Send Email
          </Button>
          <code>{'<Button primary><span>📧</span> Send Email</Button>'}</code>
        </div>
      </section>
    </div>
  )
}
