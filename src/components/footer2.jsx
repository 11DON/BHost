import "../components/styles/footer2.css";
export default function Footer2() {
    return (
        <div>
            <div class="container">
                <footer class="d-flex justify-content-between align-items-center border-top mt-0">
                    <p class="col-md-4 text-body-secondary">© 2025 Company, Inc</p>
                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item">
                            <a href="#" class="nav-link px-2 text-body-secondary"><i class="bi bi-facebook"></i></a>
                        </li>
                       
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary"><i class="bi bi-twitter-x"></i>
                        </a>
                        </li> <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary"><i class="bi bi-instagram"></i></a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary"><i class="bi bi-linkedin"></i></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}