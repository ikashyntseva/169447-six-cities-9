import SortingList from './sorting-list';

type SortingProps = {
    sortOption: string
}

function Sorting({ sortOption }: SortingProps) {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortingList selectedOption={sortOption} />
    </form>
  );
}

export default Sorting;
