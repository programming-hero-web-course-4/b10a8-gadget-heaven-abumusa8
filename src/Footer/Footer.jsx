
function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold">Gadget Heaven</h2>
        <p className="text-gray-500 mt-2">Leading the way in cutting-edge technology and innovation.</p>

        <div className="flex justify-center gap-10 mt-8">
          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-gray-700">Services</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-700">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-700">Legal</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
