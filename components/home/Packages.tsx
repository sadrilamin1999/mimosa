import HorizontalTab from '../shared/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';
import { data } from '@/data/packages';
import PackageItem from './PackageItem';

const Packages = () => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle title='Explore our beauty packages' subtitle='Packages' />

      {/* PACKAGES */}
      <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* Wellness */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Wellness')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        <div className=''></div>
        <div className=''></div>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
