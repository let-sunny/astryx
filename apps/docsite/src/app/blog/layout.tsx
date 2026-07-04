// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * Page type: blog layout
 * Standalone shell with the shared top nav and NO sidebar (issue #2896:
 * "Avoid traditional blog sidebars"). Mirrors the craft/playground layout.
 */

import {getDefaultIsMobile} from '../../lib/serverMobileHint';
import {AppShell} from '@astryxdesign/core/AppShell';
import {SharedTopNav} from '../../components/SharedTopNav';
import {SiteFooter} from '../../components/SiteFooter';

export default async function BlogLayout({
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
      {children}
      <SiteFooter />
    </AppShell>
  );
}
