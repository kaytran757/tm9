import ArticleLayout from '@/components/ArticleLayout';

type PlaceholderArticleProps = {
  title: string;
  route: string;
};

export default function PlaceholderArticle({ title, route }: PlaceholderArticleProps) {
  return (
    <ArticleLayout
      title={title}
      breadcrumbs={[
        { label: 'Trang Chủ', href: '/' },
        { label: 'Thư Viện', href: '/thu-vien' },
        { label: title },
      ]}
    >
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-6 flex h-16 w-16 rotate-45 items-center justify-center border border-brand-gold-deep/60 bg-brand-gold/10">
          <span className="font-display text-2xl -rotate-45 text-brand-gold-deep">文</span>
        </div>
        <p className="font-sans text-lg leading-relaxed text-gray-600">
          Nội dung bài viết đang được cập nhật. Vui lòng quay lại sau!
        </p>
        <a
          href="/thu-vien"
          className="mt-8 inline-flex items-center rounded-full border border-brand-gold-deep/50 px-6 py-3 font-sans text-sm font-semibold text-brand-gold-deep transition-all hover:bg-brand-gold hover:text-brand-brown"
        >
          ← Quay lại Thư Viện
        </a>
      </div>
    </ArticleLayout>
  );
}
