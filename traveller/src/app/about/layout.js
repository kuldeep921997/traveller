import Header from '../../components/Header';
import "./style.css"

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}
