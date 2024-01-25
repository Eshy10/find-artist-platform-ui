import pageStyles from 'components/layout/layout.module.scss';

interface PageLayoutProps {
   children: React.ReactNode | React.ReactNode[];
}

const PageLayout = ({ children }: PageLayoutProps) => {
   return <div className={pageStyles.layout}>{children}</div>;
};

export default PageLayout;
