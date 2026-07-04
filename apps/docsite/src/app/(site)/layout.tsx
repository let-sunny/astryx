// Copyright (c) Meta Platforms, Inc. and affiliates.

import {getDefaultIsMobile} from '../../lib/serverMobileHint';
import {AppShell} from '@astryxdesign/core/AppShell';
import {SharedTopNav} from '../../components/SharedTopNav';
import {SiteFooter} from '../../components/SiteFooter';
import styles from './layout.module.css';

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultIsMobile = await getDefaultIsMobile();

  return (
    <AppShell
      variant="surface"
      height="auto"
      mobileNav={{defaultIsMobile}}
      topNav={<SharedTopNav />}>
      <div className={styles.shell}>
        <div className={styles.main}>{children}</div>
        <div className={styles.footer}>
          <SiteFooter />
        </div>
      </div>
    </AppShell>
  );
}
