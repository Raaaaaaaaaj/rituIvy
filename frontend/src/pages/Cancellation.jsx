import { Layout } from "@/components/layout/Layout";

const Cancellation = () => {
  return (
    <Layout>
      {/* HEADER SECTION */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-jungle mb-8">
            Advance, Cancellation and Group Booking Policy
          </h1>
        </div>
      </section>
      {/* CONTENT SECTION */}
      <section className="pb-24 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          {/* Section */}
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              1. ADVANCE PAYMENT	POLICY
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Standard	Direct	Bookings</b>
                <ul> • A	booking	may	require	advance	payment	to	confirm	the	reservation.</ul>
                <ul> • Advance	amount	(if	collected)	will	be	adjusted	against	the	final	bill.</ul>
                <ul> • The	hotel	reserves	the	right	to	release	unguaranteed	bookings.</ul>
              </li>
            </ul>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Peak	Dates	/	High-Demand	Periods</b>
                <ul> • 100%	advance	payment	is	required	during	peak	seasons,	festive	dates,	long	weekends,	or	special	city	events.</ul>
                <ul> • Bookings	without	advance	during	these	periods	may	be	cancelled	at	management	discretion</ul>
              </li>
            </ul>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Corporate	/	Long-Stay	Bookings</b>
                <ul> • Advance	structure	may	vary	as	per	mutually	agreed	contract	terms.</ul>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              2. CANCELLATION	POLICY	(24	HOURS)
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Standard	Flexible	Rate</b>
                <ul> • Free	cancellation	up	to	24	hours	prior	to	check-in.</ul>
                <ul> • Cancellation	within	24	hours	of	check-in	will	attract	a	one-night	retention	charge.</ul>
              </li>
            </ul>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Non-Refundable	Rate</b>
                <ul> • Promotional	or	discounted	rates	are	strictly	non-refundable.</ul>
                <ul> • No	modification	or	cancellation	permitted.</ul>
              </li>
            </ul>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>No-Show	Policy</b>
                <ul> • One	night’s	charge	will	be	levied	in	case	of	no-show.</ul>
                <ul> • For	prepaid	bookings,	applicable	amount	will	be	retained.</ul>
              </li>
            </ul>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Early	Departure</b>
                <ul> • In	case	of	early	departure	after	check-in,	the	hotel	may	charge	retention	for	one	additional
                  night	unless	prior	agreement	exists.</ul>
              </li>
            </ul>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Refund	Processing</b>
                <ul> • Eligible	refunds	will	be	processed	within	7–10	working	days.</ul>
                <ul> • Refund	timelines	may	vary	depending	on	payment	method	and	banking	channels.</ul>
                <ul> • OTA	bookings	will	be	governed	by	the	respective	OTA’s	refund	policy.</ul>
              </li>
            </ul>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Force	Majeure</b>
                <ul> • The	hotel	shall	not	be	liable	for	cancellations	due	to	government	restrictions,	natural
                  calamities,	or	unforeseen	circumstances	beyond	its	control.</ul>
                <ul> • Rescheduling	may	be	offered	at	management	discretion	after	levying	a	charge.	</ul>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              3. BULK	/	GROUP	BOOKING	POLICY
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Definition</b>
                <ul> • A	booking	of	5	or	more	rooms	for	the	same	dates	will	be	treated	as	a	Group	Booking.</ul>
              </li>
            </ul>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Advance	Structure</b>
                <ul> • 20%	advance	at	confirmation.</ul>
                <ul> • 100%	payment	48	hours	before	check-in.</ul>
              </li>
            </ul>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Cancellation	Policy	for	Group	Bookings.</b>
                <ul> • More	than	7	days	prior:	10%	retention	of	total	booking	value</ul>
                <ul> • 3–7	days	prior:	20%	retention.</ul>
                <ul> • Less	than	48	hours:	100%	retention	of	booked	rooms.</ul>
              </li>
            </ul>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Reduction	in	Room	Count</b>
                <ul> • Reduction	of	up	to	5	rooms	allowed	until	48	hrs	prior.</ul>
                <ul> • Beyond	that,	full	charge	as	per	confirmed	room	block	for	the	first	night.	</ul>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              4. WEDDING	&	BANQUET-LINKED	ROOM	BOOKINGS
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li><b>Banquet-Linked	Room	Block	Clause</b>
                <ul> • Special	room	rates	are	valid	only	if	the	agreed	Banquet	Minimum	Guarantee	(MG)	is
                  maintained.</ul>
                <ul> • In	case	of	reduction	in	banquet	MG,	the	hotel	reserves	the	right	to	revise	room	rates	to
                  prevailing	published	tariff.	</ul>
                <ul> • Release	or	cancellation	of	banquet	booking	may	automatically	result	in	cancellation	of	the
                  associated	room	block.	</ul>
                <ul> • Room	block	rates	are	concessional	and	offered	exclusively	in	conjunction	with	confirmed
                  banquet	events.	</ul>
                <ul> • These	rates	are	not	transferable	to	independent	bookings.	</ul>
                <ul> • Wedding	Room	Block	Policy	</ul>
                <ul> • A	minimum	room	block	commitment	must	be	confirmed	in	writing.	</ul>
                <ul> • Room	block	will	be	held	only	against	agreed	advance	payment.	</ul>
                <ul> • Unutilized	rooms	beyond	the	permissible	reduction	limit	will	be	billed	as	per	confirmed
                  booking.	</ul>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              5. Cookies
            </h2>
            <p className="text-dark leading-relaxed mb-6">
              We use cookies to enhance browsing experience and analyze website
              performance. You may disable cookies in your browser settings.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              6. Your Rights
            </h2>
            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li>• Request access to your personal data</li>
              <li>• Request correction or deletion</li>
              <li>• Opt out of marketing communications</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              7. Policy Updates
            </h2>
            <p className="text-dark leading-relaxed mb-6">
              This policy may be updated periodically. Please review this page
              for any changes.
            </p>
          </div>
          <div className="pt-8 border-t border-jungle/20 text-sm text-dark">
            Last Updated: February 2026
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Cancellation;