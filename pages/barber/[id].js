// pages/barber/[id].js
import { useRouter } from 'next/router';
import BarberDetails from '../../components/BarberDetails';

const BarberDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the barber details and reviews based on the `id` parameter.

  return (
    <div>
      <h1>Barber Details</h1>
      <BarberDetails barberId={id} />
      {/* You can include a ReviewForm component here. */}
    </div>
  );
};

export default BarberDetailPage;
