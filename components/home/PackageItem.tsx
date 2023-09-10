import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { formatCurrency } from '@/utls/formatCurrency';

interface PackageItemProps {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
}
const PackageItem: React.FC<PackageItemProps> = ({
  id,
  title,
  image,
  category,
  description,
  price,
}) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      <Link
        href={`/packages/${id}`}
        className='group h-[15rem] w-full overflow-hidden rounded-xl border border-gray'
      >
        <Image
          src={image}
          alt={title}
          height={640}
          width={640}
          priority
          className='eq h-full w-full object-cover brightness-90 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>

      <div className='eq flex w-full flex-col gap-2.5 rounded-xl border border-gray bg-gray/25 p-5 hover:bg-gray/50'>
        <span className='text-xs font-bold uppercase tracking-[.375em] text-red'>
          {category}
        </span>
        <h4 className='text-2xl'>{title}</h4>
        <hr />
        <p className='text-dark/75'>{description}</p>
        <div className='flex items-center justify-between gap-2.5'>
          <p className='text-2xl'>{formatCurrency(price)}</p>
          <Link href={`/packages/${id}`} className={buttonVariants()}>
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
