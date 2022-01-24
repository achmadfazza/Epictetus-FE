import PostTitle from './PostTitle';
import PostAuthor from './PostAuthor';

export default function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <PostTitle category={category} title={title} date={date} />
      <p className='text-white/60 mt-6 w-10/12'>{shortDescription}</p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorJob={authorJob}
        authorName={authorName}
      />
    </>
  );
}
