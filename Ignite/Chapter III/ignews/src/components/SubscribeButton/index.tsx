import { useSession, signIn } from 'next-auth/client'
import styles from './styles.module.scss'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'

interface SubscribeButtonProps {
  priceId: String;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()

  async function handleSubscrible() {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
    
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscrible}
    >
      Subscribe Now
    </button>
  )
}